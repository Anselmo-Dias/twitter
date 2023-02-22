import './Login.css'

import logoTwitterImg from '../assets/logo-twitter.svg'
import { FormEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowBendDownRight } from 'phosphor-react'

export function Login() {
  const [dataUser, setDataUser] = useState({
    nameUser: '',
    passwordUser: '',
  })
  const [dataFormCorrect, setDataFormCorrect] = useState(false)

  const progressDataForm = () => {
    let valueWidth = 0

    const testDataName = dataUser.nameUser.split(' ')
    console.log(testDataName)
    if (dataUser.nameUser) {
      if (testDataName[1]) {
        valueWidth += 50
      }
    }

    if (dataUser.passwordUser) {
      const pattern =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      if (pattern.test(dataUser.passwordUser)) {
        valueWidth += 50
      }
    }

    return valueWidth
  }

  function handleChange(event: any) {
    const { name, value } = event.target

    setDataUser((state) => {
      const newData = { ...state, [name]: value }

      console.log(newData)
      return newData
    })

    progressDataForm()
  }

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()

    setDataFormCorrect(true)
  }

  return (
    <div className="container layoutLogin">
      <div className="contentLogin">
        {!dataFormCorrect ? (
          <>
            <div
              className="progress"
              style={{ width: `${progressDataForm()}%` }}
            >
              <div></div>
            </div>
            <form onSubmit={handleSubmitForm}>
              <div className="fields">
                <input
                  type="text"
                  name="nameUser"
                  placeholder="Nome Completo"
                  value={dataUser.nameUser}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="passwordUser"
                  placeholder="Senha"
                  value={dataUser.passwordUser}
                  onChange={handleChange}
                  min={8}
                />
                {progressDataForm() >= 50 ? (
                  <ul>
                    <li>Deve conter número</li>
                    <li>Deve conter letras</li>
                    <li>Deve conter um caracter especial</li>
                  </ul>
                ) : null}
              </div>

              <button type="submit" disabled={progressDataForm() < 100}>
                <img src={logoTwitterImg} alt="" />
                Cadastrar
              </button>
            </form>
          </>
        ) : (
          <NavLink className="linkSucess" to="/home">
            Avançar <ArrowBendDownRight />
          </NavLink>
        )}
      </div>
    </div>
  )
}
