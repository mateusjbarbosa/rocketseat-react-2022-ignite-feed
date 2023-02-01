import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import React, { useState } from "react";
import {
  Author,
  Comment as CommentModel,
  Profile as ProfileModel,
  TextContent,
} from "../../models";
import { Comment } from "../Comment";
import { Profile } from "../Profile";
import styles from "./styles.module.css";

interface Props {
  author: Author;
  content: TextContent[];
  id: number;
  profile: ProfileModel;
  publishedAt: Date;
}

export function Post({ author, content, id, profile, publishedAt }: Props) {
  const [comments, setComments] = useState<CommentModel[]>([]);
  const [newCommentText, setNewCommentText] = useState<string>("");

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

  function handleNewComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setComments([
      ...comments,
      {
        id: comments.length + 1,
        author: {
          avatarURL: profile.avatarURL,
          name: profile.name,
          role: profile.role,
        },
        content: [
          {
            type: "paragraph",
            content: newCommentText,
          },
        ],
        postID: id,
        publishedAt: new Date(),
      },
    ]);

    setNewCommentText("");
  }

  function handleNewCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  }

  function handleNewCommentInvalid(e: React.InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("Este campo é obrigatório");
  }

  function deleteComment(commentID: number) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment.id !== commentID
    );

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <Profile
          name={author.name}
          orientation="horizontal"
          picture={author.avatarURL}
          role={author.role}
        />

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
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

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          placeholder="Deixe um comentário"
          required
          value={newCommentText}
        />

        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            content={comment.content}
            id={comment.id}
            onDeleteComment={deleteComment}
            publishedAt={comment.publishedAt}
          />
        ))}
      </div>
    </article>
  );
}
