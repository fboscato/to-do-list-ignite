import sttyle from './Post.module.css'

export function Post(){
    return(
        <div>
          <input className={sttyle.post} type="text" />
          <button className={sttyle.post}>Ok</button>
        </div>
    )
}