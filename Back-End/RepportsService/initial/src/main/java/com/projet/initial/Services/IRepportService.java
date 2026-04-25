package com.projet.initial.Services;

import com.projet.initial.Model.Repport;

import java.util.List;
import java.util.UUID;

public interface IRepportService {
    public Repport findByIdDB(UUID id);
    public List<Repport> findAllDB();
    public void saveDB(Repport rep);
    public void deleteDB(UUID id);
    public void updateDB(Repport rep);
    public List<Repport> FindRecent();
}
