package com.ray.opinionpoll.resource;

import com.ray.opinionpoll.document.Users;
import com.ray.opinionpoll.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by i857019 on 8/9/17.
 */
@RestController
@RequestMapping("/rest/users")
public class UsersResource
{

    private UserRepository userRepository;
    public UsersResource(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    @GetMapping("/all")
    public List<Users> getAll(){
      return userRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public  Users addUser(@RequestBody UserRepository user) {
        return userRepository.save(new Users(1, "Test"));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Users updateUser(@RequestBody Users updateUser, @PathVariable Integer id) {
        updateUser.setId(id);
        return userRepository.save(updateUser);
    }
}
