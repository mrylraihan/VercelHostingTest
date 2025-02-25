import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('')
  const [content , setContent] = useState([])
  const [lastWord , setLastWord] = useState('')
 
  useEffect(()=>{
    let arrWord = quote.split(' ')
    setLastWord(arrWord[arrWord.length - 1])
    arrWord.pop()
    setContent(arrWord.join(' '))
    
  },[quote])

  const getQuote = ()=>{
    fetch('https://api.kanye.rest')
			.then((response) => response.json())
			.then((data) => setQuote(data.quote))
			.catch(console.error)
  }
  console.log(quote)


  return (
		<>
			<div>
					<h1 className='text-3xl font-bold text-red-700'>
						{quote? content + ' ':`Hello world! `}
						<span className='bg-red-1oo text-red-800 text-3xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-200 dark:text-red-800 ms-2'>
							{lastWord!=''?lastWord:"PRO"}
						</span>
					</h1>
				<button className='text-red-800' onClick={getQuote}>
					Get me a Quote!
				</button>
			</div>
		</>
	)
}

export default App
