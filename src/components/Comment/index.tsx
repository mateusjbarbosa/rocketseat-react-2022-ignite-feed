import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { HandsClapping, Trash } from 'phosphor-react';
import { useState } from "react";
import { Author, TextContent } from '../../models';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

interface Props {
  author: Author;
  content: TextContent[];
  id: number;
  onDeleteComment: (commentID: number) => void;
  publishedAt: Date;
}

export function Comment({ author, content, id, onDeleteComment, publishedAt }: Props) {
  const [likesCount, setLikesCount] = useState<number>(0);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  });

  function handleDeleteComment() {
    onDeleteComment(id)
  }

  function handleLikeComment() {
    setLikesCount(currentValue => currentValue + 1)
  }

  return (
   <div className={styles.comment}>
    <Avatar
      alt=""
      hasBorder={false}
      picture={author.avatarURL}
    />

    <div className={styles.box}>
      <div className={styles.content}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>{author.name}</strong>
            <time
              title={publishedDateFormatted}
              dateTime={publishedAt.toISOString()}
            >
              {publishedDateRelativeToNow}
            </time>
          </div>

          <button
            onClick={handleDeleteComment}
            title="Deletar comentário"
          >
            <Trash size={24}/>
          </button>
        </header>

        {content.map((line) => {
          switch (line.type) {
            case "paragraph": {
              return (
                <p
                  key={`${author.name}_${publishedAt.toISOString()}_${
                    line.content
                  }`}
                >
                  {line.content}
                </p>
              );
            }
            case "link": {
              return (
                <p
                  key={`${author.name}_${publishedAt.toISOString()}_${
                    line.content
                  }`}
                >
                  <a href="#">{line.content}</a>
                </p>
              );
            }
          }
        })}
      </div>

      <footer>
        <button onClick={handleLikeComment}>
          <HandsClapping />
          Aplaudir <span>{likesCount}</span>
        </button>
      </footer>
    </div>
   </div>
  )
}
