# avl-api
a simple API to interact with the Academic Vocabulary List (Gardner & Davies, 2013) 


There is currently no way to programmatically interact with the AVL, and this is presented as the seed of a solution that would be easily searchable via a web interface, and possibly also expanded to include simple quizzes/games based on the data.

---

fire it up with

`npm run dev`

all nice and babelified!

once the server is running, the endpoint will be

`https://SERVER/?word=WORD`

currently live at https://micromaterials.org/avl-api

(note: it expects a mongo database instance to have the data in it, though that implementation detail hasn't been included here.)

## References

The following is the AVL source article, and please cite this as the data source if you are using this code.

Gardner, D., & Davies, M. (2013). A new academic vocabulary list. Applied Linguistics, 35(3), 305-327.
