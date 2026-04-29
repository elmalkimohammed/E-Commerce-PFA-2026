package com.projet.initial.Services;

import com.projet.initial.Model.Repport;
import com.projet.initial.Repo.RepportRepo;
import com.projet.initial.Service.IRepportLogger;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
@Service
public class RepportService implements IRepportService{
    private final IRepportLogger repportLogger;
    private final RepportRepo repo;
    public RepportService(RepportRepo repo , IRepportLogger repportLogger ) {
        this.repportLogger = repportLogger;
        this.repo = repo;
    }
    @Override
    public Repport findByIdDB(UUID id) {

        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Repport not found"));
    }

    @Override
    public List<Repport> findAllDB() {
        List<Repport> repports = repo.findAll();
        return repports;
    }

    @Override
    public void saveDB(Repport rep) {
        Repport save =repo.save(rep);
        repportLogger.log(save);

    }

    @Override
    public void deleteDB(UUID id) {
        repo.deleteById(id);

    }

    @Override
    public void updateDB(Repport rep) {
        Repport exist = repo.findById(rep.getRepportId()).orElse(null);
        if(exist == null){
            throw new RuntimeException("Repport not found");
        }
        exist.setSourceEmail(rep.getSourceEmail());
        exist.setTitle(rep.getTitle());
        exist.setDescription(rep.getDescription());
        repo.save(exist);


    }
    @Override
    public List<Repport> FindRecent() {
        LocalDateTime since = LocalDateTime.now().minusDays(1);
        return repo.findRecentRepports(since);
    }
}
