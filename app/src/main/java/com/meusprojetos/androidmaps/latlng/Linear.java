package com.meusprojetos.androidmaps.latlng;

import com.google.android.gms.maps.model.LatLng;

/**
 * Created by emirliz on 10/08/15.
 */
public class Linear implements LatLngInterpolator{
    @Override
    public LatLng interpolate(float fraction, LatLng a, LatLng b) {
        double lat = (b.latitude - a.latitude) * fraction + a.latitude;
        double lng = (b.longitude - a.longitude) * fraction + a.longitude;
        return new LatLng(lat, lng);
    }
}
