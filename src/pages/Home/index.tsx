import { FormEvent, useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

import styles from './Home.module.css'
import { Loader } from '../../components/Loader';

interface CoinProps {
  name: string,
  delta_24h: string,
  price: string,
  symbol: string,
  volume_24h: string,
  market_cap: string,
  formattedPrice: string,
  formattedMarketCap: string,
  numberDelta: number;
}

interface DataProps {
  coins: CoinProps[]
}

export function Home() {
  const [coins, setCoins] = useState<CoinProps[]>([])
  const [inputValue, setInputValue] = useState("")
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    function getData() {
      fetch('https://sujeitoprogramador.com/api-cripto/?key=1f5cf18394d5602f&pref=BRL')
        .then(response => response.json())
        .then((data: DataProps) => {
          const coinsData = data.coins.slice(0, 15);
          const price = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
          const formatResult = coinsData.map((item) => {
            const formatted = {
              ...item,
              formattedPrice: price.format(Number(item.price)),
              formattedMarketCap: price.format(Number(item.market_cap)),
              numberDelta: parseFloat(item.delta_24h.replace(",", "."))
            };

            return formatted;
          })
          
          setCoins(formatResult);
          setLoading(false)
        })
    }

    getData();
  }, [])

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    if (inputValue === "") return;

    navigate(`/detail/${inputValue}`)
  }

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          placeholder='Digite o símbolo da moeda. Ex: BTC...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit' className={styles.btn}>
          <div className={styles.searchBtn}>
            <BiSearch color='#fff' size={18} />
          </div>
          <div className={styles.textBtn}>Pesquisar</div>
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th scope='col'>Moeda</th>
            <th scope='col'>Valor mercado</th>
            <th scope='col'>Preço</th>
            <th scope='col'>Volume</th>
          </tr>
        </thead>
        <tbody id='tbody'>
          {coins.map((coin) => (
            <tr key={coin.name} className={styles.tr}>
              <td data-label='Moeda' className={styles.tdLabel}>
                <Link className={styles.link} to={`/detail/${coin.symbol}`}>
                  <span>{ coin.name}</span> | {coin.symbol}
                </Link>
              </td>
              <td data-label='Mercado' className={styles.tdLabel}>{coin.formattedMarketCap}</td>
              <td data-label='Preço' className={styles.tdLabel}>{coin.formattedPrice}</td>
              <td className={coin.numberDelta >= 0 ? styles.tdProfit : styles.tdLoss} data-label="Volume">
                <span>{coin.delta_24h}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}