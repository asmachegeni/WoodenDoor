import React, { useState } from "react";
import Select from "react-select";
const Software = () => {
  const [openList, setList] = useState([
    { value: " Microsoft Word", label: " Microsoft Word" },
    { value: "Microsoft Excel", label: "Microsoft Excel" },
    { value: "Microsoft Access", label: "Microsoft Access" },
    { value: "Microsoft Powerpoint", label: "Microsoft Powerpoint" },
    { value: "Microsoft Visio", label: "Microsoft Visio" },
    { value: "Microsoft Project", label: "Microsoft Project" },
    { value: "Microsoft One Note", label: "Microsoft One Note" },
    { value: "Microsoft Outlook", label: "Microsoft Outlook" },
    { value: "MathType", label: "MathType" },
    { value: "Swift", label: "Swift" },
    { value: "Microsoft Visual Studio", label: "Microsoft Visual Studio" },
    { value: "Eclipse", label: "Eclipse" },
    { value: "Netbeans", label: "Netbeans" },
    { value: "Android Studio", label: "Android Studio" },
    { value: "Notepad++", label: "Notepad++" },
    { value: "C#", label: "C#" },
    { value: "C++", label: "C++" },
    { value: "Java", label: "Java" },
    { value: "C", label: "C" },
    { value: "Delphi", label: "Delphi" },
    { value: "Pascal", label: "Pascal" },
    { value: "Ruby on Rails", label: "Ruby on Rails" },
    { value: "Python", label: "Python" },
    { value: "ASP.Net", label: "ASP.Net" },
    { value: "Html & CSS", label: "Html & CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "VB Script", label: "VB Script" },
    { value: "Go", label: "Go" },
    { value: "Android Development", label: "Android Development" },
    { value: "PHP", label: "PHP" },
    { value: "Node.js", label: "Node.js" },
    { value: "SharePoint", label: "SharePoint" },
    { value: "JQuery", label: "JQuery" },
    { value: "Fortran", label: "Fortran" },
    { value: "Assembly", label: "Assembly" },
    { value: "Xamarin", label: "Xamarin" },
    {
      value: "iOS Development (Objective C)",
      label: "iOS Development (Objective C)",
    },
    { value: "Visual Basic", label: "Visual Basic" },
    { value: "Crystal Reports", label: "Crystal Reports" },
    { value: "Stimulsoft Report", label: "Stimulsoft Report" },
    { value: "Fast Report", label: "Fast Report" },
    { value: "Quick Report", label: "Quick Report" },
    { value: "Subversion", label: "Subversion" },
    { value: "GIT", label: "GIT" },
    { value: "Xcode", label: "Xcode" },
    { value: "Angular", label: "Angular" },
    { value: "Django", label: "Django" },
    { value: "Laravel", label: "Laravel" },
    { value: "Hibernate", label: "Hibernate" },
    { value: "Rest API", label: "Rest API" },
    { value: "React", label: "React" },
    { value: "Unit Testing", label: "Unit Testing" },
    { value: "Dependency Injection", label: "Dependency Injection" },
    { value: " Entity Framework", label: " Entity Framework" },
    { value: " Visual Paradigm", label: " Visual Paradigm" },
    { value: "Rational rose", label: "Rational rose" },
    { value: "Selenium", label: "Selenium" },
    { value: "Jenkins", label: "Jenkins" },
    { value: "Microsoft Test Manager", label: "Microsoft Test Manager" },
    { value: "Kafka", label: "Kafka" },
    { value: "ZeroMQ", label: "ZeroMQ" },
    { value: "Elastic Search", label: "Elastic Search" },
    { value: "VueJS", label: "VueJS" },
    { value: "OpenCV", label: "OpenCV" },
    { value: "Keras", label: "Keras" },
    { value: "Java SE", label: "Java SE" },
    { value: "Oracle WebLogic", label: "Oracle WebLogic" },
    { value: "Oracle Form & Report", label: "Oracle Form & Report" },
    { value: "React Native", label: "React Native" },
    { value: "Dart", label: "Dart" },
    { value: "Flutter", label: "Flutter" },
    { value: " .Net Core / .Net", label: " .Net Core / .Net" },
    { value: "Embedded C", label: "Embedded C" },
    {
      value: "Microsoft Azure Devops / TFS",
      label: "Microsoft Azure Devops / TFS",
    },
    { value: "Dapper", label: "Dapper" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Scala", label: "Scala" },
    { value: "ShellScript", label: "ShellScript" },
    { value: "Erlang", label: "Erlang" },
    { value: "MapReduce", label: "MapReduce" },
    { value: "Spark", label: "Spark" },
    { value: "Zookeeper", label: "Zookeeper" },
    { value: "Cloudera", label: "Cloudera" },
    { value: "Weka", label: "Weka" },
    { value: "Oracle BI", label: "Oracle BI" },
    { value: "ODI", label: "ODI" },
    { value: "Unity", label: "Unity" },
    { value: "Corona SDK", label: "Corona SDK" },
    { value: "SpriteKit", label: "SpriteKit" },
    { value: "AppGameKit", label: "AppGameKit" },
    { value: "Construct 2", label: "Construct 2" },
    { value: "MonoGame", label: "MonoGame" },
    { value: "Cocos2D", label: "Cocos2D" },
    { value: "Gideros", label: "Gideros" },
    { value: "Haxe", label: "Haxe" },
    { value: "Unreal Engine", label: "Unreal Engine" },
    { value: "GameMaker", label: "GameMaker" },
    { value: "Torque 3D", label: "Torque 3D" },
    { value: "Buildbox", label: "Buildbox" },
  ]);
  let [skill, setSkill] = useState([]);
  let temp;
  return (
    <div>
      <Select
        options={openList}
        placeholder="گروه شغلی "
        id="city-search"
        value={skill}
        onChange={(e) => {
          skill = e;
          console.log(e.length);
          setSkill(skill);
          console.log(skill[0]);
        }}
        isSearchable={true}
        isMulti={true}
      />
      {skill.length != 0
        ? skill.map((item, index) => {
            return (
              <div key={index}>
                <span>{item.label} </span>
                <select>
                  <option>مقدماتی</option>
                  <option>متوسط</option>
                  <option>بالاتر از متوسط</option>
                  <option>پیشرفته</option>
                  <option>در حد زبان مادری</option>
                </select>
              </div>
            );
          })
        : ""}

      <button>انصراف</button>
      <button>ذخیره</button>
    </div>
  );
};
export default Software;
