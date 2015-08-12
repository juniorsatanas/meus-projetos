package com.meusprojetos.androidmaps.latlng;

import com.google.android.gms.maps.model.LatLng;

/**
 * Created by emirliz on 10/08/15.
 */
public interface LatLngInterpolator {
    public LatLng interpolate(float fraction, LatLng a, LatLng b);
}
