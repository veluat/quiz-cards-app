import s from './loader.module.scss'

export const Loader = () => {
  return (
    <div className={s.linearActivity}>
      <div className={s.indeterminate}></div>
    </div>
  )
}
