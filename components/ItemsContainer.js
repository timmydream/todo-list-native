import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "react-router-native";

import Item from "./Item";

const ItemsContainer = () => {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask(null);
  };

  const handleRemoveTask = (index) => {
    const copy = [...tasks];
    copy.splice(index, 1);
    setTasks(copy);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <View style={styles.inputView}>
        <Text style={styles.notesTitle}>Notes:</Text>
        <View style={styles.inputInnerView}>
          <TextInput
            placeholder="Write a todo task"
            value={task}
            onChangeText={(text) => setTask(text)}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleAddTask}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      {tasks.map((text, i) => (
        <Link to={text} underlayColor="#f0f4f7">
          <Item text={text} handleRemoveTask={() => handleRemoveTask(i)} />
        </Link>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  title: {
    fontSize: 40,
    fontWeight: 800,
  },
  notesTitle: {
    color: "#575767",
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 5,
  },
  inputView: {
    marginVertical: 10,
  },
  inputInnerView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addText: {
    fontWeight: 600,
  },
  input: {
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
    width: "80%",
    paddingBottom: 5,
  },
});

export default ItemsContainer;
