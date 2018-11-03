# boo
It is nothing more than a random shit for now :p. Using React at front-end and NodeJS at backend with mongoDB and graphQL

## Queries

### 1.For creating new user

```
mutation {
  addUser(data: {email: "test@test1.com", name: "Test"}) {
    _id
    email
    name
  }
}

```
### 2. For updating user

```
mutation {
  updateUser(id: "5bdc1d88521b9e10e67b00f8", data: {email: "test@test2.com", name: "Test User"}) {
    _id
    email
    name
  }
}

```
### 3. For removing user

```
mutation {
  removeUser(id: "5bdc1d88521b9e10e67b00f8") {
		_id
  }
}

```

### 4. For adding post

```
mutation {
  addPost(data:{
    uid:"5bdb48e608bb0b231ac967ff",
    title:"Any Title",
    body: "Any Body"
  }) {
    _id
    uid
    title
    body
  }
}

```
### 4. To get single user information

```
query {
  User(id:"5bdb48e608bb0b231ac967ff") {
    _id
    email
    name
  }
}

```
### 5. To get multiple user information

```
query{
  Users {
    _id
    email
    name
  }
}

```
### 6. To get all the posts created by all the uers

```
query{
  Users {
    _id
    email
    name
    posts {
      _id
      uid
      title
      body
    }
  }
}
```


