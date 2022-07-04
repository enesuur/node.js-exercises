bool = true;
const posts = 
[
    {title : 'post1',body : 'content1 ',category : 'category1',author : 'author1'},
    {title : 'post2',body : 'content2 ',category : 'category2',author : 'author2'},
    {title : 'Post3',body : 'content3',category : 'category3',author : 'author3'}
]


function listPosts(posts){
    posts.map((post) => {
        console.log(post)
    });
};

const addPost = (title,body,category,author) => {
    posts.push({title,body,category,author});
}

const getData = (bool)=>{
    return  new Promise((resolve,reject) => {
        if(bool){
            addPost("post4","content4","category4","author4");
            listPosts(posts);
            resolve("List has been updated!");
        }else{
            reject("Some Eror occured")
        }
    })
}


const updatePosts = new Promise((resolve,reject)  => {
    resolve("Post list has been updated.");
    reject("Error occured!");
});

async function  updateList(){
    try{
        const receivedData = await getData(bool);
        console.log(receivedData);
    }catch(err){
        console.log(err);
    }
};
updateList();
