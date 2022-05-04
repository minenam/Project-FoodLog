import React, {useState, uesEffect}  from 'react'
import {useNavigatge} from 'react-router-dom'
import '../../css/blog/BlogArticle.css'


function BlogArticle() {

//   articleRouter.post("/article/create", loginRequired, async function(req, res, next){
//     try {
//         if (is.emptyObject(req.body)) {
//           throw new Error(
//             "headers의 Content-Type을 application/json으로 설정해주세요"
//           );
//         }
//     const {title, content, nickName, filePath} = req.body;
    
//     const newArticle = await ArticleService.addArticle({
//         nickName,
//         title,
//         content,
//         filePath,
//     });
//     if (newArticle.errorMessage) {
//         throw new Error(newArticle.errorMessage);
//     }
//       res.status(201).json(newArticle);
//     } catch (error) {
//       next(error);
//     }
//   });


// articleRouter.post("/article/uploadFile", 
//   upload.single('image'), async function(req, res, next){
//   try{

//     const fileData = req.file;

//     if (fileData === undefined){
//       return res.status(202).json({
//         error: false,
//       });
//     } else{
//       res.status(200).send(fileData);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// articleRouter.put("/article/saveFile",
//   async function(req, res, next) {
//   try{

//   const { articleId, filePath } = req.body;

//   const newArticleFile = await ArticleService.addFileInfo({ articleId, filePath });
//   console.log(newArticleFile)
//   if (newArticleFile){
//     throw new Error(newArticleFile.errorMessage);
//   }
//   res.status(200).json(newArticleFile);
// } catch (error){
//   next(error);
// }
// });



  return (
    
    <div className="articleWrapper">
      <div className="articleContainer">
        <div className="aritcleTitleBox">
          <div className="articleTitle">글 입력창에 받은 제목</div>
          <div className="articleDate">백엔드에서 계산된 글 작성 시간</div>
          <div className="articleAuthor">글 입력창에서 입력한 닉네임</div>
        </div>
        <div className="articleImageBox">
        <div className="articleImage">이미지 경로를 URL로 넣습니다.</div> 
        </div>
        <div className="articleContent">
          여깄다가 Quill에서 작성한 HTML 태그를 통째로 넣을 생각입니다.
          혹시 안된다면 텍스트만 넣도록 수정해야 할것 같습니다.
          <p>예시용 p태그입니다. 이걸 바로 적용되게 해야할것 같은데요. 줄바꿈이 되는지부터 확인해봅시다. 줄바꿈이 되나요?
            잘 되네요. div태그안에 받아온 p태그를 전부 넣을 수 있으면 적용하는데 문제는 없을것 같습니다.
          </p>
        </div>
        <div className="articleRecommand">
          여깄다가 좋아요 버튼을 넣고 누를시 좋아요가 한번 늘어나고
          한번 누르면 버튼을 정지시킬 생각입니다. 
        </div>
      </div>
    </div>


  )

}

export default BlogArticle