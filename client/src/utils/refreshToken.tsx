import React from 'react'

export const refreshTokenSetup = (res) => {
    let refreshTiming = (res.tokenOjb.expires_in || 3600 - 5 * 60) * 1000

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse()
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000
        console.log('newAuthRes:', newAuthRes)
        console.log('newAuthToken:', newAuthRes.id_token)
        setTimeout(refreshToken, refreshTiming)
    }
    setTimeout(refreshToken, refreshTiming)
}
