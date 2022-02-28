import React from "react";
import { Row, Col, Input, Button } from "antd";
import { toDoListContext } from "../../contexts";
import { InputBox } from "../../components";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";
import { navigate } from "@reach/router";
import "./home.css";

export default function ToDo({ contentHeight }) {
  // ToDo list context
  let toDoList = React.useContext(toDoListContext);
  //   State
  const [userInput, setUserInput] = React.useState("");
  const [toDoListData, setToDoListData] = React.useState(toDoList);
  const [showEditMode, setShowEditMode] = React.useState(false);
  const [editInputId, setEditInputId] = React.useState(null);

  //   task Input onchange
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  //   On enter submit task to list
  const handleSubmit = () => {
    addTask(userInput);
    setUserInput("");
  };

  // add New task to the todolist
  const addTask = (userInput) => {
    let toDoListNew = toDoListData;
    /** @desc if new task added push to todoList */
    toDoListNew.push({
      id: toDoListNew?.length + 1,
      subject: userInput,
      createdAt: moment(new Date()).format("DD-MM-YYYY h:mm a"),
    });
  };

  //   Delete task from todolist
  const deleteTask = (i) => {
    toDoListData.splice(i, 1);
    setToDoListData([...toDoListData]);
  };
  //  show as input box in editmode
  const openEditMode = (id) => {
    setShowEditMode(true);
    setEditInputId(id);
  };
  //   Edit Task
  const updateTask = (e, id, createdAt) => {
    let value = e.target.value;
    let currentList = toDoListData.map((item) => {
      return item?.id === id
        ? { id: id, subject: value, createdAt: createdAt }
        : item;
    });
    setToDoListData(currentList);
    setShowEditMode(false);
  };

  //   Redirect to task detail view
  const showDetailView = (Id, details) => {
    navigate(`/detail/${Id}`, { state: { details: details } });
  };

  return (
    <div>
      <Row
        style={{
          padding: "24px",
          height: contentHeight,
          cursor: "pointer",
        }}
      >
        <Col span={10}>
          <Row>
            <Col span={12}>
              {/** @desc  User task Input */}
              <InputBox
                userInput={userInput}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </Col>
          </Row>
        </Col>
        <Col span={14}>
          {toDoListData.map((item1, i) => {
            return (
              <div key={item1?.id}>
                <div className="cardStyle">
                  <Row className="centerStyle">
                    {/** @desc ToDo Task card */}
                    <Col span={18} className="startStyle">
                      <div style={{ marginBottom: "4px" }}>
                        {item1?.createdAt}
                      </div>
                      {/** @desc on edit show editable inputbox */}
                      {showEditMode && editInputId === item1?.id ? (
                        <Input
                          defaultValue={item1.subject}
                          onBlur={(e) =>
                            updateTask(e, item1?.id, item1?.createdAt)
                          }
                          onPressEnter={(e) =>
                            updateTask(e, item1?.id, item1?.createdAt)
                          }
                        />
                      ) : (
                        <div
                          className="sPrimaryBold"
                          onClick={() => showDetailView(item1?.id, item1)}
                        >
                          {item1.subject}
                        </div>
                      )}
                    </Col>
                    {/** @desc  delete Task */}
                    <Col span={3} className="endStyle">
                      <Button onClick={() => deleteTask(i)}>
                        <DeleteOutlined />
                      </Button>
                    </Col>
                    {/** @desc  Edit Task */}
                    <Col span={3} className="endStyle">
                      <Button onClick={() => openEditMode(item1?.id)}>
                        <EditOutlined />
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}
