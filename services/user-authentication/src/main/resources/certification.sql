create table certification(
uid bigint not null auto_increment unique,
nickname varchar(20) not null unique,
mobile char(11) not null unique,
password varchar(20) not null,
primary key(uid)
)charset=utf8;
