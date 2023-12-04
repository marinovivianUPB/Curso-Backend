package com.upb.admin.domain.interfaces;

import com.upb.admin.infrastructure.entity.LibroEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibroRepository extends JpaRepository<LibroEntity, String> {

}
