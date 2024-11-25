import './RenderingList.css'
const RenderingList =()=>{
    const books = [
        {id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960, pages: 281},
        {id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949, pages: 328},
        {id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', year: 1925, pages: 180},
        {id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', year: 1813, pages: 279},
        {id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', year: 1937, pages: 310}
      ];

      return(
        <div>
        <h1>Book List</h1>
       <table className="styled-table">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>author</th>
                <th>genre</th>
                <th>year</th>
                <th>pages</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book)=>(
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.genre}</td>
                    <td>{book.year}</td>
                    <td>{book.pages}</td>
                </tr>
            ))}
        </tbody>
       </table>
      </div>
      )
}
export default RenderingList