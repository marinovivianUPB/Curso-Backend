package com.upb.admin.repository;

import com.upb.admin.entity.LibroEntity;
import com.upb.admin.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibroRepository extends JpaRepository<LibroEntity, String> {

}
