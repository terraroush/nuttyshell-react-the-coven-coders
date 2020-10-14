import React, { useContext, useRef, useState } from "react"
import { Form, Button } from 'semantic-ui-react'
import { NewsContext } from "./NewsProvider"

export const NewsForm = (props) => {
    const { addNews } = useContext(NewsContext)
    const { enteredNews, setEnteredNews } = useState("")

    const title = useRef(null)
    const synopsis = useRef(null)
    const url = useRef(null)

    const constructNewArticle = () => {
      if (enteredNews !== "")
        addNews({
                title: title.current.value,
                synopsis: synopsis.current.value,
                url: url.current.value,
                currentTimeStamp: Date.now(),
                userId
            })
            setEnteredNews("")
        }
    
    return (
        <Form>
            <h2 className="newsForm__title">New Article</h2>
            <Form.Field value={enteredNews}>
                <div className="form-group">
                    <label htmlFor="articleTitle">Article Title: </label>
                    <input type="text" id="articleTitle" ref={title} required autoFocus className="form-control" placeholder="Article title" />
                </div>
            </Form.Field>
            <Form.Field>
                <div className="form-group">
                    <label htmlFor="articleSynopsis">Synopsis: </label>
                    <input type="text" id="articleSynopsis" ref={synopsis} className="form-control" placeholder="Synopsis" />
                </div>
            </Form.Field>
            <Form.Field>
                <div className="form-group">
                    <label htmlFor="articleURL">URL: </label>
                    <input type="text" id="articleURL" ref={url} className="form-control" placeholder="URL" />
                </div>
            </Form.Field>
            
            <Button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewArticle()
                }}
                className="btn btn-primary">
                Save Article
            </Button>
        </Form>
    )
}