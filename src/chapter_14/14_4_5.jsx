const MyContext=React.createContext(/* some value */)
MyContext.displayName= "MyDisplayName"

// 개발자 도구에 "MyDisplayName.Provider"로 표시됨
<MyContext.Provider>

// 개발자 도구에 "MyDisplayName.Consumer"로 표시됨
<MyContext.Consumer>