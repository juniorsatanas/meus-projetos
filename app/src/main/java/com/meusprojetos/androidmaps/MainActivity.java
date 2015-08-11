package com.meusprojetos.androidmaps;

import android.app.Activity;
import android.os.Bundle;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.ActionBarActivity;
import android.view.Menu;
import android.view.View;
import android.widget.Button;

public class MainActivity extends ActionBarActivity implements GoogleMapFragment.OnFragmentInteractionListener{
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);
        init();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_main_activity, menu);
        return true;
    }

    private void init() {
        Button btnMostrarMapa = (Button) findViewById(R.id.btnMostrarMapa);
        btnMostrarMapa.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showMap();
            }
        });
    }

    private void showMap() {
        FragmentManager fm = getSupportFragmentManager();
        FragmentTransaction ft = fm.beginTransaction();
        ft.replace(R.id.container, new GoogleMapFragment(), "googleMaps");
        ft.commitAllowingStateLoss();
    }

    @Override
    public void onStartAnimation(View view){
        view.callOnClick();
    }

    @Override
    public void onZoomToMarkers(View view){
        view.callOnClick();
    }

    @Override
    public void onAnimateBack(View view){
        view.callOnClick();
    }
}
