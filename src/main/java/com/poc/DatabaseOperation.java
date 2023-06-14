package com.poc;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Repository;

@Repository
public class DatabaseOperation {
	
	static Map<Integer, StudentBean> map = new HashMap<>();
	
	static {
		StudentBean stuObj = new StudentBean(); 
		StudentBean stuObj1 = new StudentBean(); 
		stuObj.setId(1);  
	      stuObj.setName("abc");  
	      stuObj.setEmail("def@gmail.com");  
	      stuObj.setPassword("ghi");  
	      stuObj.setGender("M");  
	      stuObj.setAddress("aggdg shhsd hsd sdh");
	      stuObj1.setId(2);  
	      stuObj1.setName("abccccc");  
	      stuObj1.setEmail("deffff@gmail.com");  
	      stuObj1.setPassword("ghiggg");  
	      stuObj1.setGender("F");  
	      stuObj1.setAddress("aggdg shhsd hsd sdh rff");
	      map.put(stuObj.getId(), stuObj);
	      map.put(stuObj1.getId(), stuObj1);
	}
 
    public static ArrayList getStudentsListFromDB() {
        ArrayList studentsList = new ArrayList(map.values());  
//        
    	return studentsList;
    }
 
    public static void saveStudentDetailsInDB(StudentBean newStudentObj) {
//        
    	int id = 0;
    	Optional<Map.Entry<Integer, StudentBean>> op = map.entrySet().stream().max(java.util.Comparator.comparing(Map.Entry::getKey));
    	if(op.isPresent())
    		id = op.get().getKey()+1;
    	else
    		id = 1;
    	newStudentObj.setId(id);
    	 map.put(id, newStudentObj);
    	System.out.println("Saving student");
    }
 
    public static StudentBean editStudentRecordInDB(int studentId) {
//       
System.out.println("editing student");
//        
            return map.get(studentId);
//           
    	
    	
    }
 
    public static void updateStudentDetailsInDB(StudentBean updateStudentObj) {
//        
    	map.put(updateStudentObj.getId(), updateStudentObj);
    	System.out.println("updating student");
    }
 
    public static void deleteStudentRecordInDB(int studentId){
//        
    	map.remove(studentId);
    	System.out.println("deleting student");
    }

}
