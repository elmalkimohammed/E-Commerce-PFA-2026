import "../Styles/RepportForm.css";
function repportForm() {
    return (
        <form action="notification" method="post" >
            <label htmlFor="Email">Email:</label>
            <input type="email" id="Email" placeholder="Email" />
            <label htmlFor="Subject">Title:</label>
            <input type="text" id="Subject" placeholder="Title" />
            <label htmlFor="Description">Description:</label>
            <textarea id="Description" placeholder="Description" />
            <button type="submit">Submit</button>
        </form>
    );      

}

export default repportForm;