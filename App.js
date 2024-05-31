import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={require('./assets/Profile Image.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.893 13.92L16.973 17M16.084 8.581C16.084 12.768 12.701 16.162 8.52899 16.162C4.35599 16.162 0.972992 12.768 0.972992 8.582C0.972992 4.393 4.35599 1 8.52799 1C12.701 1 16.084 4.394 16.084 8.581Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#888" />
        </View>

        <TouchableOpacity style={styles.filterButton}> 
          <Image source={require('./assets/Filter.png')} style={styles.filterIcon} /> 
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/jew.png')} />
            <Text style={styles.categoryTitle}>study</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/exercise-removebg-preview.png')} />
            <Text style={styles.categoryTitle}>Exercise</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/coding.png')} />
            <Text style={styles.categoryTitle}>Code</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/cooking.png')} />
            <Text style={styles.categoryTitle}>cook</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/praying.png')} />
            <Text style={styles.categoryTitle}>Pray</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/running.png')} />
            <Text style={styles.categoryTitle}>Run</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/sleeping.png')} />
            <Text style={styles.categoryTitle}>Sleep</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/dancing.png')} />
            <Text style={styles.categoryTitle}>Dance</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.ongoingTasks}>
        <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Mobile App Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Web Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Exercise</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Study</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Data Structures</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Software Engineering</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Info Modelling</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Cyber Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Canva</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>UI/UX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Mock-Up Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Timetable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>After School Activities</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#F7F0E8',
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3,  
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  tasks: {
    fontSize: 18,
    color: '#777',
  },
  profileButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 5,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    backgroundColor: '#F7F0E8',
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 15,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.2, // For iOS shadow
    shadowRadius: 3, // For iOS shadow
  },
  searchInput: {
    flex: 2,
    height: 'max',
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    // alignItems:'center',
    display:'flex',
    gap:"10px",
    borderWidth: 0,
    borderColor: '#EEE',
    fontSize: 16,
    color: '#FFFFFF',
  },
  searchInputWrapper: {
    flex: 2,
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    alignItems:'center',
    display:'flex',
    flexDirection:'row',
    gap:"20px",
    borderWidth: 1,
    borderColor: '#EEE',
    fontSize: 16,
    color: '#FFFFFF',
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  horizontalscroll: {
    flexGrow: 0,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '60%',
    height: 350,
    backgroundColor: '#FFFAFA',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEE',
    marginRight: 40,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 1 }, // For iOS shadow
    shadowOpacity: 0.1, // For iOS shadow
    shadowRadius: 2, // For iOS shadow
  },
  categoryImage: {
    width: '45%',
    height: 250,
    margin: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  categoryTasks: {
    color: '#333',
  },
  ongoingTasks: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  taskCard: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#FFFAFA',
    borderRadius: 15,
    height: 80,
    justifyContent: 'center',
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 1 }, // For iOS shadow
    shadowOpacity: 0.1, // For iOS shadow
    shadowRadius: 2, // For iOS shadow
  },
  taskText: {
    fontSize: 18,
    color: '#333',
  },
});