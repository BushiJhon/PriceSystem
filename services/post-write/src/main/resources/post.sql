create table post(
pid bigint not null unique auto_increment,
issueDate datetime not null,
province varchar(15) not null,
city varchar(15) not null,
industry varchar(15) not null,
title varchar(20) not null,
content varchar(50) not null,
uid bigint not null,
primary key(pid)
)charset=utf8;
