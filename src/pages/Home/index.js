import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'

import api from '../../services/api'
import {saveLink} from '../../services/storeLinks'

export default function Home() {
  const [link, setLink] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState({})

  async function handleShortLink() {
    setShowModal(true)
    try {
      const response = await api.post('/shorten', { long_url: link })
      setData(response.data)
      setShowModal(true)
      saveLink('@encurtaLink', response.data)
      setLink('')
    } catch {
      alert('Ops algo deu errado')
      setLink('')
    }
  }
  return (
    <div className="container-home">
      <div className="logo">
        <img src="./logo.png" alt="Logo Sujeito link logo" />
        <h1>Sujeito Link</h1>
        <span>Encurte seu link aqui 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            placeholder="Cole aqui seu link"
            className="inputText"
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Encurtar link</button>
      </div>
      <Menu />
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  )
}
