import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/schulzeedi.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Ederson Schulze</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13" dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir meu projeto no meu portifa.</p>
                <p>www.github.com/schulzeedi</p>
            </div>
        </article>
    )
}