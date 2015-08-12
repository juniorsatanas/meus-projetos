package com.meusprojetos.androidmaps.latlng;

import com.google.android.gms.maps.model.LatLng;

/**
 * Created by emirliz on 10/08/15.
 */
public class LinearFixed implements LatLngInterpolator{
    @Override
    public LatLng interpolate(float fraction, LatLng a, LatLng b) {
        double lat = (b.latitude - a.latitude) * fraction + a.latitude;
        double lngDelta = b.longitude - a.longitude;

        if (Math.abs(lngDelta) > 180) {
            lngDelta -= Math.signum(lngDelta) * 360;
        }
        double lng = lngDelta * fraction + a.longitude;
        return new LatLng(lat, lng);
    }
}
