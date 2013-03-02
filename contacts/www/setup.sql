CREATE TABLE cq_groups (id INTEGER NOT NULL, title VARCHAR(50), PRIMARY KEY (id));
INSERT INTO cq_groups (title) VALUES ('开发部门');
INSERT INTO cq_groups (title) VALUES ('生产部门');

CREATE TABLE cq_persons (id INTEGER NOT NULL, group_id INTEGER, first_name VARCHAR(50), last_name VARCHAR(50), mobile VARCHAR(20), phone VARCHAR(20), PRIMARY KEY (id));
INSERT INTO cq_persons (group_id, first_name, last_name, mobile, phone) VALUES (1, '科', '王', '139 9619 6412', '023 8322 1232');
INSERT INTO cq_persons (group_id, first_name, last_name, mobile, phone) VALUES (1, '路', '何', '139 9619 6412', '023 8322 1232');
INSERT INTO cq_persons (group_id, first_name, last_name, mobile, phone) VALUES (2, '西', '尹', '139 9619 6412', '023 8322 1232');