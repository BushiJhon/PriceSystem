create table user(
uid bigint not null unique,
province varchar(15) not null,
city varchar(15) not null,
industry varchar(20) not null,
company varchar(20),
introduction varchar(30),
primary key(uid)
)charset=utf8;
