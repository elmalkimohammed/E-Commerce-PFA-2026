package com.projet.initial.Mapper;

import com.projet.initial.Dto.GetDtoResponse;
import com.projet.initial.Dto.PostDtoRequest;
import com.projet.initial.Dto.PutDtoRequest;
import com.projet.initial.Model.Repport;

import java.time.LocalDateTime;


public class RepportMapper {
    public static Repport PostToModel(PostDtoRequest dto)
    {
        Repport model = new Repport();
        model.setUserID(dto.getUserID());
        model.setSourceEmail(dto.getSourceEmail());
        model.setTitle(dto.getTitle());
        model.setDescription(dto.getDescription());
        model.setCreatedAt(LocalDateTime.now());
        return  model;
    }
    public static  Repport PutToDto (PutDtoRequest dto)
    {
        Repport model = new Repport();
        model.setRepportId(dto.getRepportId());
        model.setUserID(dto.getUserID());
        model.setSourceEmail(dto.getSourceEmail());
        model.setTitle(dto.getTitle());
        model.setDescription(dto.getDescription());
        return model;
    }
    public static GetDtoResponse ModelToGet(Repport model)
    {
        GetDtoResponse dto = new GetDtoResponse();
        dto.setRepportId(model.getRepportId());
        dto.setUserID(model.getUserID());
        dto.setSourceEmail(model.getSourceEmail());
        dto.setTitle(model.getTitle());
        dto.setDescription(model.getDescription());
        dto.setCreatedAt(model.getCreatedAt());
        return dto;
    }

}
