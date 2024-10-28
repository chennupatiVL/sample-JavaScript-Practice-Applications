
//!first half of the array

// let a=[10,'hello',true,20,30,50,'k','l']
// let b=a.length/2
// console.log(a.slice(0,b))



//! WAP TO GET FIRST HALF OF THE STRING 

// let a='charminarUU'
// console.log(a.slice(0,a.length/2));



//!WAP TO GET SECOD HALF OF THE ARRAY

// let a=[10,'hello',true,20,30,50]
// let b=a.length/2
// console.log(a.slice(b));



//! WAP TO GET SECOND HALF OF THE STRING 

// let a='charminar'
// console.log(a.slice(a.length/2));



//!WAP TO REVERSE THE FIRST HALF OF THE ARRAY

// let a=[10,'hello',true,20,30,50]
// let b=a.length/2
// let d=a.slice(0,b)
// console.log(d.reverse());



//!WAP TO REVRSE THE SECOND HALF OF THE ARRAY

// let a=[10,'hello',true,20,30,50]
// let b=a.length/2
// let d=a.slice(b)
// console.log(d.reverse());



//!WAP TO REVERSE A STRING

// let a='MalayalaM'
// let b=a.split('')
// let d=b.reverse();
// console.log(d.join(''))



//!WAP TO REVERSE 1ST HALF OF THE STRING

// let a='gadaga'
// let x=a.slice(0,a.length/2)
// let b=x.split('')
// let d=b.reverse();
// console.log(d.join(''))



//!WAP TO REVERSE 2nd HALF OF THE STRING

// let a='gadaga'
// let x=a.slice(a.length/2)
// let b=x.split('')
// let d=b.reverse();
// console.log(d.join(''))



//!ANAGRAM

// let a='thequickbwnfxjmpsovrlazydgi'
// let b='plkoijuhnmbygtrfvcdewsxzaq'
// function f1(f)
// {
// let x=f.split('')
// let k=x.sort()
// return(k.join(''))
// }
// if(f1(a)==f1(b))
// {
//     console.log('anagram');
// }
// else{
//     console.log('not anagram');
// }



//!WAP TO REVERSE 1st half of the array with out using the reverse method 

// let a=[100,200,300,400,500,600]
// let h=a.slice(0,a.length/2)
// let b=[]
// for(let i=0;i<a.length/2;i++)
// {
//     b.push(h.pop())
// }
// console.log(b);



//!WAP TO REVERSE 1st half of the array with out using the reverse method using shif and unshift

// let a=[100,200,300,400,500,600]
// let h=a.slice(0,a.length/2)
// let b=[]
// for(let i=0;i<a.length/2;i++)
// {
//      b.unshift(h.shift())
//  }
// console.log(b);


//!WAP TO REVERSE 2nd half of the array with out using the reverse method 

// let a=[100,200,300,400,500,600]
// let h=a.slice(a.length/2)
// let d=h.length
// let b=[]
// for(let i=0;i<d;i++)
// {
//     b.push(h.pop())
// }
// console.log(b);



//!WAP TO REVERSE 2nd half of the array with out using the reverse method using shif and unshift

// let a=[100,200,300,400,500,600]
// let h=a.slice(a.length/2)
// let b=[]
// for(let i=0;i<a.length/2;i++)
// {
//      b.unshift(h.shift())
//  }
// console.log(b);



//!WAP TO REVERSE 1ST AND 2ND HALF OF STRING WITH OUT USING REVERESE
//ASSIGHNMENT



//!FROM THE GIVEN ARRAY GET ALL THE INDEXES OF THE ELEMENT 100

// let a=[100,400,7,100,300,600,100]
// let d=[]
// for(let i=0 ;i<=a.length;i++)
// {
//     if(a[i]==100)
//     {
//         // d.push(a.indexOf(100))
//         // a[i]=0
//         d.push(i)
//     }
// }
// console.log(d);



//!WAP TO EMPTY THE ARRAY

// let a=[10,20,30,40]
// // a.splice(0,a.length)
// let l=a.length
// for(let i=0;i<l;i++)
// {
//     a.pop()
// }
// console.log(a);


//!1)WAP TO REVERSE 1ST HALF OF THE STRING

// let a='gadaga'
// let x=a.slice(0,a.length/2)
// let l=a.length/2
// let b=x.split('')
// let d=[]
// for(let i=0 ;i<=l;i++)
// {
//    d.unshift(b.shift()) 
// }
// console.log(d.join(''))


//!2)WAP TO REVERSE 1st HALF OF THE STRING

// let a='gadaga'
// let x=a.slice(0,a.length/2)
// let l=a.length/2
// let b=x.split('')
// let d=[]
// for(let i=0 ;i<=l;i++)
// {
//    d.pop(b.push()) 
// }
// console.log(d.join(''))


//!3)WAP TO REVERSE 1st HALF OF THE STRING

// let a='gadaga'
// let x=a.slice(0,a.length/2)
// let l=a.length/2
// let b=x.split('')
// let d=[]
// for(let i=l-1 ;i>=0;i--)
// {
//    d.unshift(x[i]) 
// }
// console.log(d.join(''))





//!1)WAP TO REVERSE 2nd HALF OF THE STRING

// let a='gadaga'
// let x=a.slice(a.length/2)
// let l=a.length/2
// let b=x.split('')
// let d=[]
// for(let i=0 ;i<=l;i++)
// {
//    d.unshift(b.shift()) 
// }
// console.log(d.join(''))


//!2)WAP TO REVERSE 2nd HALF OF THE STRING

// let a='gadaga'
// let x=a.slice(a.length/2)
// let l=a.length/2
// let b=x.split('')
// let d=[]
// for(let i=0 ;i<=l;i++)
// {
//    d.pop(b.push()) 
// }
// console.log(d.join(''))


//!3)WAP TO REVERSE 2nd HALF OF THE STRING

// let a='gadaga'
// let x=a.slice(a.length/2)
// let l=a.length/2
// let b=x.split('')
// let d=[]
// for(let i=l-1 ;i>=0;i--)
// {
//    d.unshift(x[i]) 
// }
// console.log(d.join(''))


//!remove all duplicates
// let a=['h','e','l','l','o']
// let b=[]
// for(let i=0;i<=a.length-1;i++)
// {
//     if(!(b.includes(a[i])))
//     {
//         b.push(a[i])
//     }
// }
// console.log(b);


// a=[1,2,3,1,2,1,1,2,3]
// b={}
 
// for(let i=0;i<=a.length-1;i++)
// {
//     if(!(b.includes(a[i])))
//     {
//         b[i]=1
//     }
//    else{
//         b[i]+=1
//    }
// }
// console.log(b);



//!ALL ABOUT oBJECTS
// let x={a:1,b:2,c:3,d:4,g:[8,9,0],j:function(){return 0}}
// delete x.a//delete
// x.a=67//update
// x.vij=89
// x.vij=78
// console.log(x,x.b,x.c,x.g[0],x.j());

//1)OBJECT KEYS()
// let x={a:1,b:2,c:3,d:4,g:[8,9,0],j:function(){return 0}}
// console.log('keys---------'+Object.keys(x));
// console.log('entries----------'+Object.entries(x));
// console.log('flat----------'+Object.entries(x).flat(0));
// console.log('values--------'+Object.values(x));


//!2) Object.fromEntries(x-array)
// let x={a:1,b:2,c:3,d:4,g:[8,9,0],j:function(){return 0}}
// let y=Object.entries(x).flat(0)
// let z=Object.values(x)
// console.log(Object.fromEntries(z));
//yield.esal=5000

// let p=Object.assign(x,{l:56},{y:70})
// console.log(x);



// A=[1,2,3,1,2,1,1,2,3]
// b={}
//  for i in a:
//    if i not in b:
//         b[i]=1
//    else:
//         b[i]+=1

//! Hashing


// let x=[{'id':1,'name':'a'},
//        {'id':2,'name':'b'},
//        {'id':3,'name':'c'}]
//        let a=1
//        x.map(y=>
//         {   
//             Object.assign(y,{'exp':a,'state':'bhihar'})
//             a++
//         })
//         console.log(x);



//! All the math functions


// console.log(Math.floor(0.5));
// console.log(Math.floor(0.6));
// console.log(Math.floor(0.4));
// console.log(Math.floor(-0.5));
// console.log(Math.floor(-0.4));
// console.log(Math.floor(-0.6));

// console.log(Math.ceil(0.5));
// console.log(Math.ceil(0.6));
// console.log(Math.ceil(0.4));
// console.log(Math.ceil(-0.5));
// console.log(Math.ceil(-0.4));
// console.log(Math.ceil(-0.6));

// console.log(Math.trunc(1.908));

// console.log(Math.max(1,8,7,9));

// console.log(Math.abs(-0.4));

// console.log(Math.min(9,2,3,4,5));

// console.log(Math.sqrt(4));

// console.log(Math.cbrt(9));

// console.log(Math.pow(4));

// console.log(Math.trunc(Math.random()*8));

// console.log(Math.random()*8);

                                                              


//!DATE TIME
// let y=new Date()

// // console.log(y.getTime());
// // console.log(y.getFullYear());
// let x=y.getDay()
// z=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// console.log(z[x]);
// // console.log(y.getHours());
// // console.log(y.getMilliseconds());
// // console.log(y.getMonth);
// // console.log(y);
// z=y.getTime()
// f=['jan','feb','march','apr','may','june','july','aug','sep','oct','nov','dec']
// console.log(f[y.getMonth()]);

//!Practice
let a=[1,2,4,6,2,1]
console.log(a);

let b=[9,8,9,8,7,0,8,,]+a

console.log(b);
console.log(this);


