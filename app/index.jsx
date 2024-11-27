import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import ToDoList from '../components/ToDoList.jsx';
import ToDoForm from '../components/ToDoForm.jsx';

const Index = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} tasks={tasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
});

export default Index;