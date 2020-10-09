

{
    var family = {
        'address': 'Seoul',
        members: {},
        addFamily: function(age, name, role) {
          this.members[role] = {
            age: age,
            name: name
          };
        },
        getHeadcount: function() {
          return Object.keys(this.members).length;
        }
      };
      
      family.addFamily(30, 'kay', 'queen');
      family.addFamily(31, 'bomi', '붕붕');
      family.addFamily(10, 'dangdangi', 'dog');
      family.addFamily(30, 'chloe', 'aunt');
      family.addFamily(3, 'lyn', 'niece');
    
      
      var printMembers = function() {
        var members = family.members;
        for (role in members) {
          console.log('role: ' + role + ', name: ' + members[role].name
           + ', age: ' + members[role].age);
        }
      };
      printMembers();
      
    var members = family.members;
    members['queen'] = {age: 20, name: 'ellsa'};
    members.붕붕 = {age: 32, name: 'bomi'};
    delete members.dog;
    delete members['niece'];
    printMembers();
}

//단축 속성명으로 재작성
{
    const address = 'busan';
    let members = {};
    let addFamily = function(age, name, role) {
        this.members[role] = {age, name};     
        };
    
    const getHeadcount = function() {
        return Object.keys(this.members).length;
      };
    
    let family = {address, members, addFamily, getHeadcount};
    
    family.addFamily(30, 'kay', 'queen');
    family.addFamily(31, 'bomi', '붕붕');
    family.addFamily(10, 'dangdangi', 'dog');
    family.addFamily(30, 'chloe', 'aunt');
    family.addFamily(3, 'lyn', 'niece');
    
    console.log(family.getHeadcount());
}

{
// 속성 게산명 

let obj = {};
for(let i = 0; i < 4; i++){
    obj['key' +  i] = i;
}
console.log(obj);

const profile =  'kay:30';
let person = {
    [profile] : true,
    [profile.split(':') [0]] : [profile.split(':') [1]]
};
console.log(person);

}