package com.ray.opinionpoll.config;

import com.ray.opinionpoll.document.Users;
import com.ray.opinionpoll.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * Created by i857019 on 8/9/17.
 */
@EnableMongoRepositories(basePackageClasses = UserRepository.class)
@Configuration
public class MongoDBConfig
{

    @Bean CommandLineRunner commandLineRunner(UserRepository userRepository)
    {
        return new CommandLineRunner()
        {

            @Override public void run (String... strings) throws Exception
            {
                userRepository.save(new Users(1, "peter"));
                userRepository.save(new Users(2, "Magdi"));
            }

        };
    }

}
