import { Component, OnInit } from '@angular/core';
import { code_snippet_access_child_route, code_snippet_access_parameter, code_snippet_child_route, code_snippet_rg_can_activate, code_snippet_rg_can_activate_child, code_snippet_rg_can_deactivate, code_snippet_rg_resolve, code_snippet_rg_usage, code_snippet_route_param, code_snippet_router_outlet, code_snippet_routing } from './routing-navigation.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-navigation',
  templateUrl: './routing-navigation.component.html',
  styleUrl: './routing-navigation.component.css'
})
export class RoutingNavigationComponent implements OnInit {
  _code_snippet_routing = code_snippet_routing;
  _code_snippet_router_outlet = code_snippet_router_outlet;
  _code_snippet_route_param = code_snippet_route_param;
  _code_snippet_access_parameter = code_snippet_access_parameter;
  _code_snippet_child_route = code_snippet_child_route;
  _code_snippet_access_child_route = code_snippet_access_child_route;
  _code_snippet_rg_can_activate = code_snippet_rg_can_activate;
  _code_snippet_rg_can_activate_child = code_snippet_rg_can_activate_child;
  _code_snippet_rg_can_deactivate = code_snippet_rg_can_deactivate;
  _code_snippet_rg_resolve = code_snippet_rg_resolve;
  _code_snippet_rg_usage = code_snippet_rg_usage;

  userId: string | null = null;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.userId = param['id'];
    })
  }
}
