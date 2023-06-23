import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import styles from './Detail.module.css'
import { TiArrowBack } from 'react-icons/ti'
import { Loader } from '../../components/Loader';

interface CoinProps {
  symbol: string,
  name: string,
  price: string,
  market_cap: string,
  low_24h: string,
  high_24h: string,
  total_volume_24h: string,
  delta_24h: string,
  formattedPrice: string,
  formattedMarketCap: string,
  formattedLow24h: string,
  formattedHigh24h: string,
  numberDelta: number;
  error?: string,
}

export function Detail() {
  const [detail, setDetail] = useState<CoinProps>()
  const [loading, setLoading] = useState(true)
  const { cripto } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    function getData() {
      fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=1f5cf18394d5602f&pref=BRL&symbol=${cripto}`)
        .then(response => response.json())
        .then((data: CoinProps) => {
          if(data.error) {
            navigate("/")
          }

          const price = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          });

          const resultData = {
            ...data,
            formattedPrice: price.format(Number(data.price)),
            formattedMarketCap: price.format(Number(data.market_cap)),
            formattedLow24h: price.format(Number(data.low_24h)),
            formattedHigh24h: price.format(Number(data.high_24h)),
            numberDelta: parseFloat(data.delta_24h.replace(",", "."))
          }

          setDetail(resultData)
          setLoading(false)
        })
    }

    getData()
  }, [cripto, navigate])

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.center}>{detail?.name}</h1>
      <p className={styles.center}>{detail?.symbol}</p>

      <section className={styles.content}>
        <p>
          <strong>Preço:</strong> {detail?.formattedPrice}
        </p>
        <p>
          <strong>Maior preço 24h:</strong> {detail?.formattedHigh24h}
        </p>
        <p>
          <strong>Menor preço 24h:</strong> {detail?.formattedLow24h}
        </p>
        <p>
          <strong>Delta 24h:</strong>
          {" "}
          <span className={detail?.numberDelta && detail?.numberDelta >= 0 ? styles.profit : styles.loss}>
            {detail?.delta_24h}
          </span>
        </p>
        <p>
          <strong>Valor Mercado:</strong> {detail?.formattedMarketCap}
        </p>
      </section>

      <div className={styles.back}>
        <Link to="/">
         <button className={styles.btn}>
            <div className={styles.backBtn}>
              <TiArrowBack size={24} color="#fff" />
            </div>
            <div className={styles.btnText}>Voltar</div>
          </button>
        </Link>
      </div>
    </div>
  )
}