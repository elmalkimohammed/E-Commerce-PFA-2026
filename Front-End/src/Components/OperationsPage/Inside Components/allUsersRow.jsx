import { useState } from "react";
import axios from "axios";

function AllUsersRow({ userId, Email, FirstName, LastName, Phone, Address, Sex, DateOfBirth, ProfileImage, Password, onRefresh }) {
    
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({});
    const [loading, setLoading] = useState(false);
    
    const shortPassword = Password ? Password.substring(0, 15) + '...' : '';
    const token = localStorage.getItem("generatedJWT_Token");
    
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };

    const startEditing = () => {
        setEditData({
            email: Email,
            password: "",
            firstName: FirstName,
            lastName: LastName,
            phone: Phone || "",
            address: Address || "",
            sex: Sex || "",
            dateOfBirth: DateOfBirth ? new Date(DateOfBirth).toISOString().split('T')[0] : "",
            profileImage: ProfileImage || ""
        });
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        });
    };

    const saveEdit = async () => {
        setLoading(true);
        
        try {
            // Update Private Info (PUT request)
            await axios.put(
                "http://localhost:5004/api/UserProfile/admin/updatePrivateInfo",
                {
                    email: editData.email,
                    password: editData.password || null,
                    userId: userId  // The backend needs this to identify which user to update
                },
                config
            );

            // Update Public Info (PATCH request)
            await axios.patch(
                "http://localhost:5004/api/UserProfile/admin/updatePublicInfo",
                {
                    firstName: editData.firstName,
                    lastName: editData.lastName,
                    phone: editData.phone || null,
                    address: editData.address || null,
                    sex: editData.sex || null,
                    dateOfBirth: editData.dateOfBirth || null,
                    profileImage: editData.profileImage || null,
                    userId: userId  // The backend needs this
                },
                config
            );

            alert("User updated successfully!");
            setIsEditing(false);
            onRefresh();
        } catch (error) {
            console.error("Update error:", error);
            alert(error.response?.data || error.response?.data?.error || "Update failed");
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async () => {
        if (!window.confirm("Delete this user?")) return;
        
        try {
            await axios.delete(`http://localhost:5001/api/auth/deleteUser/${userId}`, config);
            alert("User deleted!");
            onRefresh();
        } catch (error) {
            alert(error.response?.data || "Delete failed");
        }
    };

    if (isEditing) {
        return (
            <tr>
                <td>{userId}</td>
                <td><input name="email" value={editData.email} onChange={handleChange} /></td>
                <td><input name="password" type="password" value={editData.password} onChange={handleChange} placeholder="New password" /></td>
                <td><input name="firstName" value={editData.firstName} onChange={handleChange} /></td>
                <td><input name="lastName" value={editData.lastName} onChange={handleChange} /></td>
                <td><input name="phone" value={editData.phone} onChange={handleChange} /></td>
                <td><input name="address" value={editData.address} onChange={handleChange} /></td>
                <td>
                    <select name="sex" value={editData.sex} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </td>
                <td><input name="dateOfBirth" type="date" value={editData.dateOfBirth} onChange={handleChange} /></td>
                <td><input name="profileImage" value={editData.profileImage} onChange={handleChange} /></td>
                <td>
                    <button onClick={saveEdit} disabled={loading} className="actionsBtn">
                        {loading ? "Saving..." : "Save"}
                    </button>
                    <button onClick={() => setIsEditing(false)} className="actionsBtn">Cancel</button>
                </td>
            </tr>
        );
    }

    return (
        <tr>
            <td>{userId}</td>
            <td>{Email}</td>
            <td title={Password}>{shortPassword}</td>
            <td>{FirstName}</td>
            <td>{LastName}</td>
            <td>{Phone || '-'}</td>
            <td>{Address || '-'}</td>
            <td>{Sex || '-'}</td>
            <td>{DateOfBirth ? new Date(DateOfBirth).toLocaleDateString() : '-'}</td>
            <td>{ProfileImage ? '📷' : '-'}</td>
            <td>
                <button className="actionsBtn" onClick={startEditing}>Edit</button>
                <button className="actionsBtn" onClick={deleteUser}>Delete</button>
            </td>
        </tr>
    );
}

export default AllUsersRow;