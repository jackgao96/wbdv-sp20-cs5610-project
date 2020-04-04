package com.example.project.repositories;

import com.example.project.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {
    @Query("SELECT u FROM User u")
    public List<User> findAllUsers();

    @Query("SELECT u FROM User u WHERE u.username=:username")
    public Iterable<User> findUserByUserName(@Param("username") String u);

    @Query("SELECT u FROM User u WHERE (u.username=:userName AND u.password=:password) OR (u.email=:userName AND u.password=:password)" )
    public Iterable<User> findByCredentials(@Param("userName") String userName,@Param("password") String password);

    @Query("SELECT u FROM User u WHERE u.id=:uid")
    public User findUserById(@Param("uid") Integer uid);
}
