package com.projet.initial.Controllers;

import com.projet.initial.Dto.GetDtoResponse;
import com.projet.initial.Dto.PostDtoRequest;
import com.projet.initial.Dto.PutDtoRequest;
import com.projet.initial.Mapper.RepportMapper;
import com.projet.initial.Model.Repport;
import com.projet.initial.Services.IRepportService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/repport")
public class RepportController {
    private final IRepportService repportService;

    public RepportController(IRepportService repo) {
        this.repportService = repo;
    }

    @GetMapping("/{id}")
    public ResponseEntity<GetDtoResponse> Get(@PathVariable UUID id) {
        Repport exist = repportService.findByIdDB(id);
        GetDtoResponse getDtoResponse = RepportMapper.ModelToGet(exist);
        return new ResponseEntity<>(getDtoResponse, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<GetDtoResponse>> GetAll() {
        List<Repport> repports = repportService.findAllDB();

        List<GetDtoResponse> response = repports.stream()
                .map(RepportMapper::ModelToGet)
                .toList();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> Insert(@RequestBody PostDtoRequest dto) {
        Repport repport = RepportMapper.PostToModel(dto);
        repportService.saveDB(repport);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Void> Update(@RequestBody PutDtoRequest dto) {
        Repport repport = RepportMapper.PutToDto(dto);
        repportService.updateDB(repport);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> Delete(@PathVariable UUID id) {
        repportService.deleteDB(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/recent")
    public ResponseEntity<List<GetDtoResponse>> GetRecent() {
        List<Repport> repports = repportService.FindRecent();

        List<GetDtoResponse> response = repports.stream()
                .map(RepportMapper::ModelToGet)
                .toList();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/logs")
    public ResponseEntity<String> GetLogs() {
        try {
            String content = Files.readString(Paths.get("/app/logs/repport.log"));
            return new ResponseEntity<>(content, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Log file not found", HttpStatus.NOT_FOUND);
        }
    }
}