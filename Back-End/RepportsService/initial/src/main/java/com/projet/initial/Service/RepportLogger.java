package com.projet.initial.Service;

import com.projet.initial.Model.Repport;
import org.springframework.stereotype.Service;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class RepportLogger implements IRepportLogger {
    private static final String LOG_FILE = "/app/logs/repport.log";
    private static final DateTimeFormatter FORMATTER =
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
    @Override
    public void log(Repport repport) {
        try {
            new java.io.File("logs").mkdirs();

            FileWriter fw = new FileWriter(LOG_FILE, true);
            PrintWriter pw = new PrintWriter(fw);

            pw.println("-----------------------------");
            pw.println("Time      : " + LocalDateTime.now().format(FORMATTER));
            pw.println("RepportId : " + repport.getRepportId());
            pw.println("UserID    : " + repport.getUserID());
            pw.println("Email     : " + repport.getSourceEmail());
            pw.println("Title     : " + repport.getTitle());
            pw.println("Desc      : " + repport.getDescription());
            pw.println("CreatedAt : " + repport.getCreatedAt().format(FORMATTER));
            pw.println("-----------------------------");

            pw.close();
        } catch (IOException e) {
            System.err.println("Failed to write to log: " + e.getMessage());
        }
    }
}
