package com.ray.opinionpoll.repository;

import com.ray.opinionpoll.document.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by i857019 on 8/9/17.
 */
public interface UserRepository extends MongoRepository <Users,Integer>
{
}
