const users = [
  { name: "Boon", hobby: "sleep", postcode: 10240 },
  { name: "ya", hobby: "Playgame", postcode: 10520 },
  { name: "nut", hobby: "Sleep", postcode: 10042 },
];

for (const u of users) {
  const showData = () => {
    let info1 = "My name is ";
    let info2 = "MY Hobby is ";
    let info3 = "and My postcode is ";
    return `"${info1} ${u.name} ${info2} ${u.hobby} 
${info3} ${u.postcode}"
`;
  };
  console.log(showData());
}

