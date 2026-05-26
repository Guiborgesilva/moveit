import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
  const { level } = useContext(ChallengeContext)
  return(
    <div className={styles.profileContainer}>
      <img
        src="https://scontent.ffln7-1.fna.fbcdn.net/v/t1.0-9/131431072_3579045735513674_2686153222116378267_n.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHlLvU0xxTo7O3cNsBLUp6-LUXOp_hGY3AtRc6n-EZjcLTewms4m4BFkEMRVGyVpXd-qCrI2z8Vxy6YxLoZfcbS&_nc_ohc=OtbFDIKFkvcAX-d4_A_&_nc_ht=scontent.ffln7-1.fna&oh=1100b0973eab066f6fd5f10607224e3a&oe=605ECAC1"
        alt="Guilherme Borges" />
				<div>
					<strong>Guilherme Borges</strong>
        	<p>
						<img src="icons/level.svg" alt="Level" />
						Level {level}
					</p>
				</div>
    </div>
  )
}