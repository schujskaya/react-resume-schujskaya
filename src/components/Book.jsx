import bookImage from '../images/book.jpg';

const book = [
    {
        name: 'JavaScriptю Полное руководство.',
        autor: 'Дэвид Флэнаган',
        img: '/images/book.jpg',
    },
    {
        name: 'JavaScriptю Полное руководство.',
        autor: 'Дэвид Флэнаган',
        img: '/images/book.jpg',
    },
    {
        name: 'JavaScriptю Полное руководство.',
        autor: 'Дэвид Флэнаган',
        img: '/images/book.jpg',
    }
]

export function Book() {
    return (
        <>
            <h2>Book</h2>
            <img src={bookImage} alt="book" />
            <p>Book</p>
            <img src={bookImage} alt="book" />
            <p>Book</p>
            <img src={bookImage} alt="book" />
            <p>Book</p>
        </>
    )
}