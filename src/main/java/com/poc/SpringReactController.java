package com.poc;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class SpringReactController {
	
	@Autowired
	private DatabaseOperation dao;

	@GetMapping("/students")
	public List<StudentBean> getstudents(){
		return dao.getStudentsListFromDB();
	}
	@GetMapping("/student/{studentId}")
	public StudentBean getstudent(@PathVariable("studentId") Integer studentId){
		return dao.editStudentRecordInDB(studentId);
	}
	
	@PostMapping("/students")
	public ResponseEntity<String> addUser(@RequestBody StudentBean student){
		
		dao.saveStudentDetailsInDB(student);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	@CrossOrigin
	@PutMapping("/student")
	public ResponseEntity<String> updateUser(@RequestBody StudentBean student){
		
		dao.updateStudentDetailsInDB(student);
		
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	@CrossOrigin
	@DeleteMapping("/students/{studentId}")
	public ResponseEntity<String> deleteUser(@PathVariable("studentId") Integer studentId){
		
		dao.deleteStudentRecordInDB(studentId);
		
		return new ResponseEntity<String>(HttpStatus.OK);
	}


}
