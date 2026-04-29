package com.projet.initial.Repo;

import com.projet.initial.Model.Repport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface RepportRepo extends JpaRepository<Repport, UUID> {
    @Query("SELECT r FROM Repport r WHERE r.CreatedAt >= :since")
    List<Repport> findRecentRepports(@Param("since") LocalDateTime since);
}