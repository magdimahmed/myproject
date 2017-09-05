package com.ray.opinionpoll.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by i857019 on 8/9/17.
 */
@Document
public class Users
{
    @Id
    private Integer id;
    private String  name;

    public Users (Integer id, String name)
    {
        this.id = id;
        this.name = name;
    }

    public Integer getId ()
    {
        return id;
    }

    public void setId (Integer id)
    {
        this.id = id;
    }

    public String getName ()
    {
        return name;
    }

    public void setName (String name)
    {
        this.name = name;
    }

}
